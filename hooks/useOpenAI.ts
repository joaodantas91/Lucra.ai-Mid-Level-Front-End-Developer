'use client';

import { IPrompt } from "@/models"
import { postPrompt } from "@/services/openAI.service"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"

export function usePostPrompt (options: UseMutationOptions<void, Error, IPrompt, unknown> = {}) {
  return useMutation(
    Object.assign(
      {
        mutationFn: (data: IPrompt) => {
          return postPrompt(data)
        }
      },
      options
    )
  )
}

