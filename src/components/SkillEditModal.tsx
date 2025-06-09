
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  skills: Skill[];
  onSave: (skills: Skill[]) => void;
  darkMode: boolean;
}

const SkillEditModal: React.FC<SkillEditModalProps> = ({ isOpen, onClose, skills, onSave, darkMode }) => {
  const [editableSkills, setEditableSkills] = useState<Skill[]>(skills);

  const addSkill = () => {
    setEditableSkills([...editableSkills, { name: '', level: 0 }]);
  };

  const removeSkill = (index: number) => {
    setEditableSkills(editableSkills.filter((_, i) => i !== index));
  };

  const updateSkill = (index: number, field: keyof Skill, value: string | number) => {
    const updated = editableSkills.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    );
    setEditableSkills(updated);
  };

  const handleSave = () => {
    const validSkills = editableSkills.filter(skill => skill.name.trim() !== '' && skill.level > 0);
    onSave(validSkills);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-2xl max-h-[80vh] overflow-y-auto ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <DialogHeader>
          <DialogTitle>Edit Skills & Expertise</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {editableSkills.map((skill, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <Label htmlFor={`skill-name-${index}`}>Skill Name</Label>
                <Input
                  id={`skill-name-${index}`}
                  value={skill.name}
                  onChange={(e) => updateSkill(index, 'name', e.target.value)}
                  placeholder="Enter skill name"
                />
              </div>
              <div>
                <Label htmlFor={`skill-level-${index}`}>Level (%)</Label>
                <Input
                  id={`skill-level-${index}`}
                  type="number"
                  min="0"
                  max="100"
                  value={skill.level}
                  onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value) || 0)}
                  placeholder="0-100"
                />
              </div>
              <Button
                onClick={() => removeSkill(index)}
                variant="outline"
                size="sm"
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
          
          <Button onClick={addSkill} variant="outline" className="w-full">
            <Plus size={16} className="mr-2" />
            Add New Skill
          </Button>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SkillEditModal;
