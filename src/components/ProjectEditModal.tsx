
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

interface ProjectEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  onSave: (project: Project) => void;
  darkMode: boolean;
}

const ProjectEditModal: React.FC<ProjectEditModalProps> = ({ isOpen, onClose, project, onSave, darkMode }) => {
  const [editableProject, setEditableProject] = useState<Project>(project);

  // Sync with current project when modal opens or project changes
  useEffect(() => {
    setEditableProject(project);
  }, [project, isOpen]);

  const addTech = () => {
    setEditableProject({
      ...editableProject,
      techStack: [...editableProject.techStack, '']
    });
  };

  const removeTech = (index: number) => {
    setEditableProject({
      ...editableProject,
      techStack: editableProject.techStack.filter((_, i) => i !== index)
    });
  };

  const updateTech = (index: number, value: string) => {
    const updated = editableProject.techStack.map((tech, i) => 
      i === index ? value : tech
    );
    setEditableProject({ ...editableProject, techStack: updated });
  };

  const addHighlight = () => {
    setEditableProject({
      ...editableProject,
      highlights: [...editableProject.highlights, '']
    });
  };

  const removeHighlight = (index: number) => {
    setEditableProject({
      ...editableProject,
      highlights: editableProject.highlights.filter((_, i) => i !== index)
    });
  };

  const updateHighlight = (index: number, value: string) => {
    const updated = editableProject.highlights.map((highlight, i) => 
      i === index ? value : highlight
    );
    setEditableProject({ ...editableProject, highlights: updated });
  };

  const handleSave = () => {
    const validProject = {
      ...editableProject,
      techStack: editableProject.techStack.filter(tech => tech.trim() !== ''),
      highlights: editableProject.highlights.filter(highlight => highlight.trim() !== '')
    };
    onSave(validProject);
    onClose();
  };

  const handleClose = () => {
    // Reset to current project when closing without saving
    setEditableProject(project);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={`max-w-4xl max-h-[80vh] overflow-y-auto ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <DialogHeader>
          <DialogTitle>Edit Featured Project</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <Label htmlFor="project-title">Project Title</Label>
            <Input
              id="project-title"
              value={editableProject.title}
              onChange={(e) => setEditableProject({ ...editableProject, title: e.target.value })}
              placeholder="Enter project title"
            />
          </div>

          <div>
            <Label htmlFor="project-description">Description</Label>
            <Textarea
              id="project-description"
              value={editableProject.description}
              onChange={(e) => setEditableProject({ ...editableProject, description: e.target.value })}
              placeholder="Enter project description"
              rows={4}
            />
          </div>

          <div>
            <Label>Technology Stack</Label>
            <div className="space-y-2">
              {editableProject.techStack.map((tech, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={tech}
                    onChange={(e) => updateTech(index, e.target.value)}
                    placeholder="Enter technology"
                  />
                  <Button
                    onClick={() => removeTech(index)}
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
              <Button onClick={addTech} variant="outline" size="sm">
                <Plus size={16} className="mr-2" />
                Add Technology
              </Button>
            </div>
          </div>

          <div>
            <Label>Key Highlights</Label>
            <div className="space-y-2">
              {editableProject.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={highlight}
                    onChange={(e) => updateHighlight(index, e.target.value)}
                    placeholder="Enter key highlight"
                  />
                  <Button
                    onClick={() => removeHighlight(index)}
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
              <Button onClick={addHighlight} variant="outline" size="sm">
                <Plus size={16} className="mr-2" />
                Add Highlight
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectEditModal;
