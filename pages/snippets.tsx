import type { NextPage } from 'next';
import styled from 'styled-components';
import { useState } from 'react';
import { LAYOUT_CONSTANTS } from '@styles/layout-constants';
import { PageShell, TerminalHeader } from '@components/shared/terminal/PageTerminal';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 2rem;

  @media (max-width: ${LAYOUT_CONSTANTS.MOBILE_BREAKPOINT}px) {
    margin-bottom: 1.5rem;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.4rem 0.85rem;
  background: ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.backgroundSecondary)};
  color: ${(props) => (props.$active ? props.theme.colors.background : props.theme.colors.textSecondary)};
  border: 1px solid ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.border)};
  border-radius: 2px;
  font-family: inherit;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;

  &::before {
    content: '#';
    opacity: 0.6;
    margin-right: 1px;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => (props.$active ? props.theme.colors.background : props.theme.colors.text)};
  }
`;

const NotesGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const NoteCard = styled.article`
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.backgroundSecondary}b3;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 2px solid ${(props) => props.theme.colors.border};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    border-left-color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: ${LAYOUT_CONSTANTS.MOBILE_BREAKPOINT}px) {
    padding: 1.1rem;
  }
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const NoteTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const NoteTag = styled.span`
  padding: 0.3rem 0.7rem;
  background: ${(props) => props.theme.colors.backgroundTertiary};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: lowercase;
  letter-spacing: 0.04em;

  &::before {
    content: '#';
    opacity: 0.6;
  }
`;

const NoteContent = styled.div`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const Quote = styled.blockquote`
  background: ${(props) => props.theme.colors.backgroundTertiary}80;
  border-left: 2px solid ${(props) => props.theme.colors.primary};
  padding: 1rem 1.25rem;
  border-radius: 2px;
  margin: 1rem 0;
  font-style: italic;
  color: ${(props) => props.theme.colors.text};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const NoteDate = styled.time`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textMuted};
`;

interface Note {
  id: string;
  title: string;
  content: string;
  quote?: string;
  tag: string;
  date: string;
}

const notes: Note[] = [
  {
    id: '13',
    title: 'Constraints = Power',
    content: 'Constraints remove decision fatigue and force creativity. When you deliberately limit scope, tools, or time, you channel energy into execution instead of endless options.',
    quote: 'Constraints are not blockers—they are multipliers for focus.',
    tag: 'Focus',
    date: '2024-11-15'
  },
  {
    id: '1',
    title: 'The 4 Things You Need To Be An Expert',
    content: 'Based on Veritasium\'s video: 1. Valid Environment - Your field must have learnable patterns, not inherent randomness. Politics is unpredictable; physics follows laws. 2. Repetitions - You need multiple attempts to practice. Musical instruments, coding, public speaking allow this; winning elections doesn\'t. 3. Timely Feedback - Get quick feedback on your attempts. Solving equations gives immediate verification. Without it, you can\'t know if you\'re on the right path. 4. Deliberate Practice - Don\'t just repeat in comfort. Challenge yourself, change environments, push boundaries. Growth happens outside your comfort zone.',
    quote: 'Expertise isn\'t just about practice—it\'s about practicing in the right environment with the right feedback.',
    tag: 'Learning',
    date: '2024-11-14'
  },
  {
    id: '2',
    title: 'Deep Work Over Busy Work',
    content: 'Not all hours are created equal. One hour of focused, uninterrupted deep work can be more valuable than a full day of shallow tasks. Protect your deep work time fiercely.',
    quote: 'The ability to perform deep work is becoming increasingly rare and therefore increasingly valuable.',
    tag: 'Productivity',
    date: '2024-11-09'
  },
  {
    id: '3',
    title: 'Identity-Based Habits',
    content: 'Instead of focusing on goals, focus on becoming the type of person who achieves those goals. Don\'t say "I want to run a marathon", say "I am a runner". Identity change precedes behavior change.',
    quote: 'Every action you take is a vote for the type of person you wish to become.',
    tag: 'Habits',
    date: '2024-11-08'
  },
  {
    id: '4',
    title: 'Learn in Public',
    content: 'Document your learning journey publicly. Writing about what you learn deepens your understanding, builds your network, and creates a knowledge base for others. Don\'t wait until you\'re an expert.',
    quote: 'The best way to learn is to teach.',
    tag: 'Learning',
    date: '2024-11-07'
  },
  {
    id: '5',
    title: 'The Two-Minute Rule',
    content: 'If a task takes less than two minutes, do it immediately. This prevents small tasks from accumulating and overwhelming you. It also builds momentum for tackling larger tasks.',
    tag: 'Productivity',
    date: '2024-11-06'
  },
  {
    id: '6',
    title: 'Embrace Discomfort',
    content: 'Growth happens outside your comfort zone. Deliberately seek situations that challenge you. The discomfort you feel is your brain rewiring itself for new capabilities.',
    quote: 'A ship in harbor is safe, but that is not what ships are built for.',
    tag: 'Growth',
    date: '2024-11-05'
  },
  {
    id: '7',
    title: 'Morning Rituals Matter',
    content: 'How you start your day sets the tone for everything that follows. Create a morning routine that energizes you: exercise, meditation, journaling, or simply enjoying coffee without distractions.',
    tag: 'Habits',
    date: '2024-11-04'
  },
  {
    id: '8',
    title: 'The Power of No',
    content: 'Every yes to something is a no to something else. Be selective with your commitments. Saying no to good opportunities creates space for great ones.',
    quote: 'The difference between successful people and very successful people is that very successful people say no to almost everything.',
    tag: 'Focus',
    date: '2024-11-03'
  },
  {
    id: '9',
    title: 'Reflection Time',
    content: 'Schedule regular time for reflection. Weekly reviews help you course-correct early, celebrate wins, and extract lessons from failures. Progress without reflection is just motion.',
    tag: 'Productivity',
    date: '2024-11-02'
  },
  {
    id: '10',
    title: 'Build a Learning System',
    content: 'Don\'t just consume content. Create a system for capturing, processing, and applying what you learn. Use tools like note-taking apps, spaced repetition, and teaching others.',
    tag: 'Learning',
    date: '2024-11-01'
  },
  {
    id: '11',
    title: 'Energy Management > Time Management',
    content: 'Manage your energy, not just your time. Schedule your most important work during your peak energy hours. Protect your energy through sleep, exercise, nutrition, and boundaries.',
    quote: 'Time is what we want most, but what we use worst.',
    tag: 'Productivity',
    date: '2024-10-31'
  },
  {
    id: '12',
    title: 'The Power of Questions',
    content: 'Ask better questions to get better answers. Instead of "Why me?", ask "What can I learn?". Instead of "What if I fail?", ask "What if I succeed?". Questions direct focus.',
    tag: 'Mindset',
    date: '2024-10-30'
  }
];

const Snippets: NextPage = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', ...Array.from(new Set(notes.map(note => note.tag)))];

  const filteredNotes = selectedTag === 'All' 
    ? notes 
    : notes.filter(note => note.tag === selectedTag);

  return (
    <PageShell>
      <TerminalHeader
        command="cat ~/notes/*.md"
        title="Notes"
        subtitle="Lessons on growth, productivity, and living intentionally. A collection of insights that have shaped my journey."
      >
        <FilterContainer>
          {tags.map((tag) => (
            <FilterButton
              key={tag}
              $active={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterContainer>
      </TerminalHeader>

      <NotesGrid>
        {filteredNotes.map(note => (
          <NoteCard key={note.id}>
            <NoteHeader>
              <div>
                <NoteTitle>{note.title}</NoteTitle>
                <NoteDate>{new Date(note.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}</NoteDate>
              </div>
              <NoteTag>{note.tag}</NoteTag>
            </NoteHeader>
            <NoteContent>{note.content}</NoteContent>
            {note.quote && (
              <Quote>{note.quote}</Quote>
            )}
          </NoteCard>
        ))}
      </NotesGrid>
    </PageShell>
  );
};

export default Snippets;
