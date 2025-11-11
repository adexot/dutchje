import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Dutchje PWA
          </h1>
          <p className="text-xl text-muted-foreground">
            Built with React, Vite, Tailwind CSS, and shadcn/ui
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setCount((count) => count - 1)}
            >
              Decrease
            </Button>
            <div className="min-w-[120px]">
              <p className="text-6xl font-bold">{count}</p>
            </div>
            <Button
              size="lg"
              onClick={() => setCount((count) => count + 1)}
            >
              Increase
            </Button>
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Edit <code className="px-2 py-1 bg-muted rounded text-foreground">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
