interface MCQprops {
  questions: [
    {
      id: number;
      question: string;
      options: [];
    }
  ];
}

const MCQ: React.FC<MCQprops> = ({ questions }) => {
  return (
    <div>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MCQ;
