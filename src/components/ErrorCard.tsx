import { type Dispatch, type SetStateAction } from 'react'
import { TriangleAlert, X } from 'lucide-react'

import { Alert, AlertTitle } from './ui/alert'

interface ComponentNameProps {
  error: string
  setError: Dispatch<SetStateAction<string>>
}

export default function ComponentName({ error, setError }: ComponentNameProps) {
  return (
    <>
      {error && (
        <Alert variant="destructive" className="my-4">
          <TriangleAlert />
          <AlertTitle>{error}</AlertTitle>
          <button
            className="text-destructive absolute top-3.5 right-4 inline size-4 cursor-pointer rounded bg-transparent hover:text-white"
            onClick={() => setError('')}
            aria-label="Dismiss error"
            title="Dismiss error"
          >
            <X size={16} aria-hidden="true" />
            <span className="sr-only">Dismiss error</span>
          </button>
        </Alert>
      )}
    </>
  )
}
