export default function Item({children: value = 'value', label = 'label'}) {
    return (
        <span className="text-sm">
                <strong>{label}</strong> {value}
        </span>
        )
}
