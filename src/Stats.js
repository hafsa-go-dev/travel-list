export default function Stats({items}) {

    if(!items.length) return  <footer className="stats"><em>Start adding some items to your packing list! 🌈</em></footer>
    const numItems = items.length;
    const itemsPacked = items.filter(item => item.packed).length;
    const percent = Math.round((itemsPacked / numItems) * 100);

    return <footer className="stats">
        <em>{ percent === 100 ? "You've got everything! Ready to go! ✈️" : `You have ${numItems} items on your list, and you've already packed ${itemsPacked} of them! (${percent}%)`}</em>
    </footer>
}