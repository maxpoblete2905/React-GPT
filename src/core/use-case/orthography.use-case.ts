import type { OrthographyResponse } from "../../interfaces";

export const orthographyUseCase = async (prompt: string) => {
  try {

    console.log(import.meta.env.VITE_GPT_API)
    const resp = await fetch(`${ import.meta.env.VITE_GPT_API }/orthography-check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
    })

    if( !resp.ok ) throw new Error('No se pudo realizar la correccion');

    const data = await resp.json() as OrthographyResponse
    
    return  {
      ok: true,
      ...data
    }
  } catch (error) {
    return {
        ok: false,
        userScore: 0,
        errors: [],
        message: 'No se pudo realizar la corrección'
    }
  }
};
