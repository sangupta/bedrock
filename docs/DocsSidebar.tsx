import React from 'react';
import AVAILABLE_COMPONENTS, { BedrockComponent } from './BedrockComponents';

export interface DocsSidebarProps {
    onSelect: (component: BedrockComponent) => void;
}

export default function DocsSidebar(props: DocsSidebarProps) {
    const components: BedrockComponent[] = AVAILABLE_COMPONENTS;
    const { onSelect } = props;

    return <aside>
        <ul>
            {components.map((component: BedrockComponent) => {
                return <ComponentItem
                    key={component.name}
                    component={component}
                    onSelect={onSelect}
                />
            })}
        </ul>
    </aside>
}

export interface ComponentItemProps {
    component: BedrockComponent;
    onSelect: (component: BedrockComponent) => void;
}

export function ComponentItem(props: ComponentItemProps) {
    const { component, onSelect } = props;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onSelect(component);
    }

    return <li>
        <a onClick={handleClick} href={component.path}>{component.name}</a>
    </li>
}
