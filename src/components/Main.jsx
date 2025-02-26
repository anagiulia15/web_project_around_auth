import Card from "./Cards";

export default function Main(props) {
  return (
    <div>
      <main className="elements">
        {props.cards.map((card) => {
          return (
            <Card
              card={card}
              onDelete={props.handleDelete}
              onLike={props.handleLike}
              key={card._id}
              setSelectCard={props.setSelectCard}
            />
          );
        })}
      </main>
    </div>
  );
}
