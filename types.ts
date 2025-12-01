import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

export enum SectionId {
  HERO = 'hero',
  PHILOSOPHY = 'philosophy',
  PROJECTS = 'projects',
  SERVICES = 'services',
  CONTACT = 'contact',
}