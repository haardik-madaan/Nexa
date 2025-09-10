const { 
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,

} = require('@google/generative-ai')

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model =  genAI.getGenerativeModel({
  model:"gemini-2.5-pro"
});

const generationConfig={
  temperature: 1,
  topP: 0.95,
  topK: 40,
 
  responseMimeType: "text/plain" 
}

const CodeGenerationConfig={
  temperature: 1,
  topP: 0.95,
  topK: 40,
  
  responseMimeType: "application/json"
}

export const chatSession = model.startChat({
  generationConfig,
  History: [

  ]
});

export const GenAiCode =  model.startChat({
  generationConfig: CodeGenerationConfig,
  History:[
  ]
});