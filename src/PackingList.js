import {useState} from "react";

export default function PackingList({items, onDeleteItem, onToggleItem, setItems}) {

    const [sortBy, setSortBy] = useState("packed");

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items;
    }

    if (sortBy === "description") {
        sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
    }

    if (sortBy === "packed") {
        sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
    }

    function clearList() {
        const confirmed = window.confirm("Are you sure you want to delete all items?");
        if (confirmed) {
            setItems(items = []);
        }
    }
    return (
        <div className="list">
            <ul>
                {
                    sortedItems.map((item) => (<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />))
                }
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">
                        Sort by input order
                    </option>
                    <option value="description">
                        Sort by description
                    </option>
                    <option value="packed">
                        Sort by packed status
                    </option>
                </select>
                <button onClick={() => clearList()}>Clear list</button>
            </div>
        </div>
    );
}


function Item({item, onDeleteItem, onToggleItem}) {
    return <li><input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/><span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}</span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button></li>
}