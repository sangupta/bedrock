import AccordionDocs from "./components/content/AccordionDocs";
import ByteSizeDocs from "./components/content/ByteSizeDocs";
import ColorBoxDocs from "./components/content/ColorBoxDocs";

export interface BedrockComponent {
    name: string;
    path: string;
    description: string;
    component: React.ComponentType;
}

const AVAILABLE_COMPONENTS: BedrockComponent[] = [
    {
        name: 'Accordion',
        path: '/components/accordion',
        description: 'A vertically stacked set of panels, only one of which can be expanded at a time.',
        component: AccordionDocs,
    },
    {
        name: 'ByteSize',
        path: '/components/bytesize',
        description: 'A component that displays a byte size in a readable format.',
        component: ByteSizeDocs,
    },
    {
        name: 'ColorBox',
        path: '/components/colorbox',
        description: 'A color box component that displays a single box filled with a given color.',
        component: ColorBoxDocs,
    },
];

export default AVAILABLE_COMPONENTS;
