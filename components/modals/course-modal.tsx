"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseModalProps {
  course: {
    id: string
    title: string
    description: string
    duration: string
    target: string
    content: string[]
    certificate: string
    billing?: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  if (!course) return null

  const scrollToSection = (href: string) => {
    onClose()
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl">{course.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">{course.description}</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Dauer</h4>
              <p className="text-sm text-muted-foreground">{course.duration}</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Zielgruppe</h4>
              <p className="text-sm text-muted-foreground">{course.target}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3">Kursinhalte</h4>
            <ul className="space-y-2">
              {course.content.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Zertifikat</h4>
            <Badge variant="secondary" className="mb-2">
              {course.certificate}
            </Badge>
          </div>

          {course.billing && (
            <div>
              <h4 className="font-bold mb-2">Abrechnung</h4>
              <p className="text-sm text-muted-foreground">{course.billing}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={() => scrollToSection("#termine")} className="flex-1 bg-accent hover:bg-accent/90">
              Termin wählen
            </Button>
            <Button onClick={() => scrollToSection("#inhouse")} variant="outline" className="flex-1">
              Inhouse anfragen
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
