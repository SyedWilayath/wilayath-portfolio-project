
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
}

interface TimelineEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  timelineEvents: TimelineEvent[];
  onSave: (events: TimelineEvent[]) => void;
  darkMode: boolean;
}

const TimelineEditModal: React.FC<TimelineEditModalProps> = ({ isOpen, onClose, timelineEvents, onSave, darkMode }) => {
  const [editableEvents, setEditableEvents] = useState<TimelineEvent[]>(timelineEvents);

  const addEvent = () => {
    const newId = Math.max(...editableEvents.map(e => e.id), 0) + 1;
    setEditableEvents([...editableEvents, {
      id: newId,
      year: '',
      title: '',
      company: '',
      location: '',
      type: 'experience',
      description: '',
      achievements: ['']
    }]);
  };

  const removeEvent = (index: number) => {
    setEditableEvents(editableEvents.filter((_, i) => i !== index));
  };

  const updateEvent = (index: number, field: keyof TimelineEvent, value: string | string[]) => {
    const updated = editableEvents.map((event, i) => 
      i === index ? { ...event, [field]: value } : event
    );
    setEditableEvents(updated);
  };

  const addAchievement = (eventIndex: number) => {
    const updated = editableEvents.map((event, i) => 
      i === eventIndex ? { ...event, achievements: [...event.achievements, ''] } : event
    );
    setEditableEvents(updated);
  };

  const removeAchievement = (eventIndex: number, achievementIndex: number) => {
    const updated = editableEvents.map((event, i) => 
      i === eventIndex ? { 
        ...event, 
        achievements: event.achievements.filter((_, ai) => ai !== achievementIndex) 
      } : event
    );
    setEditableEvents(updated);
  };

  const updateAchievement = (eventIndex: number, achievementIndex: number, value: string) => {
    const updated = editableEvents.map((event, i) => 
      i === eventIndex ? {
        ...event,
        achievements: event.achievements.map((achievement, ai) => 
          ai === achievementIndex ? value : achievement
        )
      } : event
    );
    setEditableEvents(updated);
  };

  const handleSave = () => {
    const validEvents = editableEvents.filter(event => 
      event.title.trim() !== '' && event.company.trim() !== ''
    ).map(event => ({
      ...event,
      achievements: event.achievements.filter(achievement => achievement.trim() !== '')
    }));
    onSave(validEvents);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-6xl max-h-[80vh] overflow-y-auto ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <DialogHeader>
          <DialogTitle>Edit Career Journey</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {editableEvents.map((event, eventIndex) => (
            <div key={event.id} className={`p-4 border rounded-lg space-y-4 ${
              darkMode ? 'border-gray-600' : 'border-gray-300'
            }`}>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Experience {eventIndex + 1}</h4>
                <Button
                  onClick={() => removeEvent(eventIndex)}
                  variant="outline"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`year-${eventIndex}`}>Year/Period</Label>
                  <Input
                    id={`year-${eventIndex}`}
                    value={event.year}
                    onChange={(e) => updateEvent(eventIndex, 'year', e.target.value)}
                    placeholder="e.g., Sep 2023 - Present"
                  />
                </div>
                <div>
                  <Label htmlFor={`title-${eventIndex}`}>Job Title</Label>
                  <Input
                    id={`title-${eventIndex}`}
                    value={event.title}
                    onChange={(e) => updateEvent(eventIndex, 'title', e.target.value)}
                    placeholder="Enter job title"
                  />
                </div>
                <div>
                  <Label htmlFor={`company-${eventIndex}`}>Company</Label>
                  <Input
                    id={`company-${eventIndex}`}
                    value={event.company}
                    onChange={(e) => updateEvent(eventIndex, 'company', e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <Label htmlFor={`location-${eventIndex}`}>Location</Label>
                  <Input
                    id={`location-${eventIndex}`}
                    value={event.location}
                    onChange={(e) => updateEvent(eventIndex, 'location', e.target.value)}
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <Label htmlFor={`type-${eventIndex}`}>Type</Label>
                  <select
                    id={`type-${eventIndex}`}
                    value={event.type}
                    onChange={(e) => updateEvent(eventIndex, 'type', e.target.value)}
                    className={`w-full p-2 border rounded-md ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                    }`}
                  >
                    <option value="current">Current</option>
                    <option value="experience">Experience</option>
                    <option value="education">Education</option>
                  </select>
                </div>
              </div>
              
              <div>
                <Label htmlFor={`description-${eventIndex}`}>Description</Label>
                <Textarea
                  id={`description-${eventIndex}`}
                  value={event.description}
                  onChange={(e) => updateEvent(eventIndex, 'description', e.target.value)}
                  placeholder="Enter job description"
                  rows={3}
                />
              </div>
              
              <div>
                <Label>Key Achievements</Label>
                <div className="space-y-2">
                  {event.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex gap-2">
                      <Input
                        value={achievement}
                        onChange={(e) => updateAchievement(eventIndex, achievementIndex, e.target.value)}
                        placeholder="Enter achievement"
                      />
                      <Button
                        onClick={() => removeAchievement(eventIndex, achievementIndex)}
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  ))}
                  <Button onClick={() => addAchievement(eventIndex)} variant="outline" size="sm">
                    <Plus size={16} className="mr-2" />
                    Add Achievement
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <Button onClick={addEvent} variant="outline" className="w-full">
            <Plus size={16} className="mr-2" />
            Add New Experience
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

export default TimelineEditModal;
