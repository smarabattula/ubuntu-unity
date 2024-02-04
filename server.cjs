const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const OpenAI =require("openai");
const e = require('express');


const app = express();
const PORT = process.env.PORT || 7005;
const openai = new OpenAI({ apiKey: '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' });

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
console.log('   @1 ');
app.use(bodyParser.json());

// Set your OpenAI API key


console.log('   @2 ');
app.post('/api/question', async (req, res) => {
    const question = req.body.question;
    if (question.includes('book') || question.includes('books')) {
        // If the question contains 'book', provide a prompt for book recommendations
        prompt = `As a literature scholar in African culture, please recommend books related to the question: '${question}' in less than 3 sentences .`;
    } else if (question.includes('movie') || (question.includes('documentary')|| question.includes('movies') || (question.includes('documentaries')))){

        prompt = `The question is '${question}'. Please provide a movie recommendation deeply connected to African culture and history, including the movie name, a short description, and its genre in less than 2 sentences. If the question asked is not related to movie suggestions, please say 'Rephrase the question, please.@@1'`;
    }else if (question.includes('articles') ||question.includes('article') ){

        prompt = `The question is '${question}'. You are a african scholor and you read many african articles related to history and culture, Please recommend best articles acc the question asked in less than 3 sentences '`;
    }
    else{
        prompt = `Rephrase the question, please @@1.`;
    }


    console.log('   @3 ');
    try {
        const completion = await getCompletionWithRetry(prompt);
        res.json({ message: completion });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Function to get completion with retry
async function getCompletionWithRetry(prompt, model = "gpt-3.5-turbo", max_retries = 3) {
    let retries = max_retries;
    const messages = [{ "role": "user", "content": prompt }];
    const inputs = [
        { role: "system", content: "You only know african culture and history very deep and you give answers in 2 sentences only" },
        { role: "user", content: messages[0].content },
      ];

    while (retries > 0) {
        try {
            console.log('   @4aaa ');

            console.log('   @5aaa ',messages);
            console.log('   @@5   ',messages[0].content);
            const response = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [{ role: "system", content:  messages[0].content }],

            });
            console.log('   @8 ');
            console.log('   @9 ', response.choices[0].message["content"]);
            console.log(' @10 ',response.choices[0]);
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
