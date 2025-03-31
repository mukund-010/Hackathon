import axios from 'axios';

const API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

export const getDietPlan = async (foodItems, allergies) => {
  const prompt = `Given the following food items: ${foodItems.join(', ')} and allergies: ${allergies.join(', ')}, suggest a suitable diet plan.`;
  
  const response = await openai.post('/completions', {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 200,
  });

  return response.data.choices[0].text;
};
