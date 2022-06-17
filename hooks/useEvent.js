import { useState, useEffect } from 'react';
import events from '../data/events';

export const useEvent = () => {
  const currentEvent = events[Math.floor(Math.random() * events.length)];
  const [activeEvent, setActiveEvent] = useState('');

  useEffect(() => setActiveEvent(currentEvent), [currentEvent]);

  return { activeEvent };
};
