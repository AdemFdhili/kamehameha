import Category from './Components/Calender'; 
import ProfileArea from './Components/Profile-Area'
import './App.css';

function App() {
  const cards = [
    { title: "Work", workTime: "32hrs", workDate: "Last Week - 36hrs" },
    { title: "Play", workTime: "10hrs", workDate: "Last Week - 8hrs" },
    { title: "Study", workTime: "4hrs", workDate: "Last Week - 7hrs" },
    { title: "Exercise", workTime: "4hrs", workDate: "Last Week - 5hrs" },
    { title: "Social", workTime: "5hrs", workDate: "Last Week - 10hrs" },
    { title: "Self Care", workTime: "2hrs", workDate: "Last Week - 2hrs" }
  ];

  return (
    <div>
      {cards.map(card => (
        <Category 
          key={card.title}
          title={card.title}
          workTime={card.workTime}
          workDate={card.workDate}
        />
      ))}
      <ProfileArea />
    </div>
  );
}

export default App;
