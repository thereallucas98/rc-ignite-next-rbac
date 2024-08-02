import { Sheet } from 'lucide-react'

import { ProjectForm } from '@/app/(app)/org/[slug]/create-project/project-form'
import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function CreateProject() {
  return (
    <Sheet>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Create project</SheetTitle>
        </SheetHeader>

        <div className="py-4">
          <ProjectForm />
        </div>
      </InterceptedSheetContent>
    </Sheet>
  )
}
