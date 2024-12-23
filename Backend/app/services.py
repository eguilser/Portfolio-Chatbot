from transformers import AutoModelForCausalLM, AutoTokenizer

class ChatbotService:
    def __init__(self, model_name="gpt2"):
        self.model = AutoModelForCausalLM.from_pretrained(model_name)
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)

    def generate_response(self, prompt):
        inputs = self.tokenizer.encode(prompt, return_tensors="pt")
        outputs = self.model.generate(inputs, max_length=100, num_return_sequences=1)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)

