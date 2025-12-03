import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, EventItem } from '../types';
import { INITIAL_CONTENT, INITIAL_EVENTS } from '../constants';

interface ContentContextType {
  content: SiteContent;
  updateContent: (section: keyof SiteContent, key: string, value: any) => void;
  events: EventItem[];
  addEvent: (event: EventItem) => void;
  deleteEvent: (id: number) => void;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(INITIAL_CONTENT);
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [isAdmin, setIsAdmin] = useState(false);

  // Simulate persistence for the session
  useEffect(() => {
    const savedContent = localStorage.getItem('dep_site_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
  }, []);

  const updateContent = (section: keyof SiteContent, key: string, value: any) => {
    setContent((prev) => {
      const newContent = {
        ...prev,
        [section]: {
          ...prev[section],
          [key]: value,
        },
      };
      localStorage.setItem('dep_site_content', JSON.stringify(newContent));
      return newContent;
    });
  };

  const addEvent = (event: EventItem) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id: number) => {
    setEvents((prev) => prev.filter(e => e.id !== id));
  };

  const login = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  return (
    <ContentContext.Provider value={{ content, updateContent, events, addEvent, deleteEvent, isAdmin, login, logout }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};