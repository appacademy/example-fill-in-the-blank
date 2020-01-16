const localRepoName = 'example-fill-in-the-blank';

const subtopicMap = {
  videos: 'Videos',
  readings: 'Readings',
  quizzes: 'Quizzes',
  exercises: 'Exercises',
  projects: 'Projects',
  assessments: 'Assessments',
  problems: 'Problems',
  resources: 'Resources',
};
const subtopics = Object.keys(subtopicMap).map(key => ({
  id: key,
  name: subtopicMap[key],
}));

const types = {
  reading: 'Reading',
  quiz: 'Quiz',
  codingProblem: 'CodingProblem',
  project: 'Project',
  assessment: 'Assessment',
  externalResource: 'ExternalResource',
  video: 'Video',
};

const one = [
  {
    name: 'Fill in the Blank Quiz',
    type: types.quiz,
    topicId: 'test',
    subtopicId: subtopicMap.assessments.toLowerCase(),
    id: '634bd838-877c-4e93-bbd9-31c1862f5a17',
    repo: localRepoName,
    path: 'content/quiz.md',
    timeEstimate: '12:00:00',
    hideSolution: true,
  },
];

const prepWorkCourseDefinition = {
  courses: {
    sweOnlinePrepWorkCourse: {
      taskGroupId: 'a309630d-e9c3-427d-b107-c9d90ac19873',
      name: 'Example Fill in the Blank Quiz Course',
      track: 'Test Track',
      description: 'This course is used to test fill in the blank questions',
      tags: ['test'],
      catalog: false,
      order: 1,
      // Online course modifies topic names to include Week/Days
      topics: [
        {
          id: 'test',
          name: 'Test',
        },
      ],
      subtopics,
    },
  },
  tasks: [...one],
};

module.exports = prepWorkCourseDefinition;
