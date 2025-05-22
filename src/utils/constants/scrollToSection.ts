const scrollToSection = (sectionId: string, offset: number) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    const top = sectionElement.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export default scrollToSection;
