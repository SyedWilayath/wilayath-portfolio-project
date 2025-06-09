
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonials: Testimonial[];
  onSave: (testimonials: Testimonial[]) => void;
  darkMode: boolean;
}

const TestimonialEditModal: React.FC<TestimonialEditModalProps> = ({ isOpen, onClose, testimonials, onSave, darkMode }) => {
  const [editableTestimonials, setEditableTestimonials] = useState<Testimonial[]>(testimonials);

  const addTestimonial = () => {
    const newId = Math.max(...editableTestimonials.map(t => t.id), 0) + 1;
    setEditableTestimonials([...editableTestimonials, {
      id: newId,
      name: '',
      role: '',
      company: '',
      content: '',
      rating: 5,
      avatar: ''
    }]);
  };

  const removeTestimonial = (index: number) => {
    setEditableTestimonials(editableTestimonials.filter((_, i) => i !== index));
  };

  const updateTestimonial = (index: number, field: keyof Testimonial, value: string | number) => {
    const updated = editableTestimonials.map((testimonial, i) => 
      i === index ? { ...testimonial, [field]: value } : testimonial
    );
    setEditableTestimonials(updated);
  };

  const handleSave = () => {
    const validTestimonials = editableTestimonials.filter(testimonial => 
      testimonial.name.trim() !== '' && testimonial.content.trim() !== ''
    );
    onSave(validTestimonials);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-4xl max-h-[80vh] overflow-y-auto ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <DialogHeader>
          <DialogTitle>Edit Client Testimonials</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {editableTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`p-4 border rounded-lg space-y-4 ${
              darkMode ? 'border-gray-600' : 'border-gray-300'
            }`}>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Testimonial {index + 1}</h4>
                <Button
                  onClick={() => removeTestimonial(index)}
                  variant="outline"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`name-${index}`}>Name</Label>
                  <Input
                    id={`name-${index}`}
                    value={testimonial.name}
                    onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <Label htmlFor={`role-${index}`}>Role</Label>
                  <Input
                    id={`role-${index}`}
                    value={testimonial.role}
                    onChange={(e) => updateTestimonial(index, 'role', e.target.value)}
                    placeholder="Enter role"
                  />
                </div>
                <div>
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input
                    id={`company-${index}`}
                    value={testimonial.company}
                    onChange={(e) => updateTestimonial(index, 'company', e.target.value)}
                    placeholder="Enter company"
                  />
                </div>
                <div>
                  <Label htmlFor={`avatar-${index}`}>Avatar (Initials)</Label>
                  <Input
                    id={`avatar-${index}`}
                    value={testimonial.avatar}
                    onChange={(e) => updateTestimonial(index, 'avatar', e.target.value)}
                    placeholder="e.g., JD"
                    maxLength={3}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor={`content-${index}`}>Testimonial Content</Label>
                <Textarea
                  id={`content-${index}`}
                  value={testimonial.content}
                  onChange={(e) => updateTestimonial(index, 'content', e.target.value)}
                  placeholder="Enter testimonial content"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor={`rating-${index}`}>Rating (1-5)</Label>
                <Input
                  id={`rating-${index}`}
                  type="number"
                  min="1"
                  max="5"
                  value={testimonial.rating}
                  onChange={(e) => updateTestimonial(index, 'rating', parseInt(e.target.value) || 5)}
                />
              </div>
            </div>
          ))}
          
          <Button onClick={addTestimonial} variant="outline" className="w-full">
            <Plus size={16} className="mr-2" />
            Add New Testimonial
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

export default TestimonialEditModal;
