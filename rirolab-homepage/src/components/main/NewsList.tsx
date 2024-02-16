import React from 'react';

const NewsList: React.FC = () => {
  const newsItems: Array<JSX.Element | string> = [
    "Jaehwi, Chanyoung, Jinwoo achieved Master's Graduation in February 2024",
    "Minjae's paper has been accepted to IEEE ICRA, 2024",
    "Jaehwi's paper has been accepted to IEEE RA-L, 2023",
    "Dohyun's paper has been accepted to AAAI, 2023",
    'Prof. Park received the ICRA 2023 Outstanding Planning Paper Award',
    <>
      Prof. Park organizes a workshop on &quot;
      <a
        href="https://rss-ws-2023-lm.github.io/"
        target="_blank"
        className="text-blue-600 hover:underline"
        rel="noopener noreferrer">
        <b>Experiment-oriented Locomotion and Manipulation Research</b>
      </a>
      &quot; at RSS, 2023
    </>,
    <>
      Prof. Park organizes a special session on &quot;
      <a
        href="http://ro-man2023.org/paperSubmission/callForSpecialSession"
        target="_blank"
        className="text-blue-600 hover:underline"
        rel="noopener noreferrer">
        <b>Human-Agent/Robot Interaction in Healthcare and Medicine</b>
      </a>
      &quot; at RoMan, 2023
    </>,
    'Dohyun and Jinwoo received the Best Student Paper Award at RiTA 2022',
    "Yeseung's paper has been accepted to IEEE RA-L (IROS), 2022",
    'Prof. Park received the Outstanding Young Researcher Award (우수신진연구자상) at ICROS, 2022',
    // 'Ulzhalgas received the Outstanding Paper Award at KROC 2022',
    // 'Selected for ICRA 2022 Outstanding Navigation Award Finalist',
  ];

  return (
    <div className="flex flex-col border-solid border-y border-mainColor divide-solid divide-y divide-mainColor">
      {newsItems.map((content, index) => (
        <div key={index} className="py-3">
          {typeof content === 'string' ? content : content}
        </div>
      ))}
    </div>
  );
};

export default NewsList;
