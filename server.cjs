const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 7005;
const openai = new OpenAI({ apiKey: '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' });

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use(bodyParser.json());

app.post('/api/question', async (req, res) => {
    const question = req.body.question;

    let prompt = '';

    if (question.includes('book') || question.includes('books')) {
        prompt = `Recommend 5 books related to : '${question}' with a brief description of each in less than 3 sentences.`;
    } else if (question.includes('movie') || question.includes('movies') || question.includes('documentary') || question.includes('documentaries')) {
        prompt = `Give 5 African movies related to '${question}' with a brief description of each in 2 sentences.`;
    } else if (question.includes('articles') || question.includes('article')) {
        prompt = `Give 5 articles related to '${question}' with a brief description of each in 1 sentence.`;
    } else {
        prompt = `Rephrase the question, please.`;
    }

    try {
        const completion = await getCompletionWithRetry(prompt);
        res.json({ message: completion });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

async function getCompletionWithRetry(prompt, max_retries = 3) {
    let retries = max_retries;

    while (retries > 0) {
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "system", content: "You are an expert in African culture and history. Provide insightful responses in 2 sentences." }, { role: "user", content: prompt }],
            });

            return response.choices[0].message["content"];
        } catch (error) {
            if (error.response && error.response.status === 502) {
                console.log(`Received a 'Bad Gateway' error, retrying... (Attempts left: ${retries})`);
            } else if (error.message.includes('read timeout')) {
                console.log(`Read timed out, retrying... (Attempts left: ${retries})`);
            } else {
                throw error;
            }
            retries--;
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for a while before retrying
        }
    }

    throw new Error('API is not responding');
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
