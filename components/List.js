import ListItem from "./ListItem";

export default function List({ items }) {
  return items.map((i, index) => <ListItem key={index} item={i} />);
}
