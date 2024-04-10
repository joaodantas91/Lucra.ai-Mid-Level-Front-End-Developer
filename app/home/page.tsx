'use client';
import { usePostPrompt } from "@/hooks/useOpenAI";
import { OpenAIRole } from "@/types";
import { Button, Stack, TextField } from "@mui/material";


import { FormEvent, useState } from "react";

export default function Home () {
  const [promptInputValue, setPromptInputValue] = useState('')
  const postPrompt = usePostPrompt({
    onSuccess: async (data, variables) => {
      console.log({ data, variables })
      setPromptInputValue('');
    }
  })
  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()


    await postPrompt.mutateAsync({
      messages: { role: OpenAIRole.SYSTEM, content: promptInputValue }, model: '',
    })


  }

  return (

    <main>
      <form onSubmit={handleSubmit}>
        <Stack sx={{ p: 2, maxWidth: 500 }} spacing={2}>
          <TextField
            id="outlined-basic"
            label="Prompt"
            variant="outlined"
            name="prompt"
            value={promptInputValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPromptInputValue(event.target.value);
            }} />
          <Button disabled={promptInputValue.length === 0} variant="contained" type="submit">submit</Button>
        </Stack>
      </form>
    </main>

  );
}
