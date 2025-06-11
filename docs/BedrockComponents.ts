import AccordionDocs from "./components/content/AccordionDocs";
import AlertDocs from "./components/feedback/AlertDocs";
import ByteSizeDocs from "./components/content/ByteSizeDocs";
import ColorBoxDocs from "./components/content/ColorBoxDocs";
import CountdownDocs from "./components/content/CountdownDocs";
import DateTimeDocs from "./components/content/DateTimeDocs";
import IndicatorDocs from "./components/content/IndicatorDocs";
import LoadingDotsDocs from "./components/feedback/LoadingDotsDocs";
import ModalDocs from "./components/feedback/ModalDocs";
import ProgressBarDocs from "./components/feedback/ProgressBarDocs";
import SpinnerDocs from "./components/feedback/SpinnerDocs";
import StockTickerDocs from "./components/content/StockTickerDocs";
import TimeAgoDocs from "./components/content/TimeAgoDocs";
import TimeDocs from "./components/content/TimeDocs";
import TypewriterDocs from "./components/content/TypewriterDocs";

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
        name: 'Alert',
        path: '/components/alert',
        description: 'An alert or informational component used to provide contextual feedback messages for typical user actions.',
        component: AlertDocs,
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
    {
        name: 'Countdown',
        path: '/components/countdown',
        description: 'A countdown component that allows stepping between start and end values at given intervals.',
        component: CountdownDocs,
    },
    {
        name: 'DateTime',
        path: '/components/datetime',
        description: 'A component for formatting and displaying date and time values with multiple format options.',
        component: DateTimeDocs,
    },
    {
        name: 'Indicator',
        path: '/components/indicator',
        description: 'A traffic light style indicator that can be used as a status in notification areas or with bulleted items.',
        component: IndicatorDocs,
    },
    {
        name: 'LoadingDots',
        path: '/components/loadingdots',
        description: 'Displays animated dots that represent the loading status in a page.',
        component: LoadingDotsDocs,
    },
    {
        name: 'Modal',
        path: '/components/modal',
        description: 'A modal dialog component that displays content in a dialog overlay.',
        component: ModalDocs,
    },
    {
        name: 'ProgressBar',
        path: '/components/progressbar',
        description: 'A progress bar component that visually represents the completion progress of a task.',
        component: ProgressBarDocs,
    },
    {
        name: 'Spinner',
        path: '/components/spinner',
        description: 'Spinners can be used to show the loading state in your projects.',
        component: SpinnerDocs,
    },
    {
        name: 'StockTicker',
        path: '/components/stockticker',
        description: 'A simple stock ticker component that displays stock information with price change indicators.',
        component: StockTickerDocs,
    },
    {
        name: 'Time',
        path: '/components/time',
        description: 'A component for displaying time in a clock format with timezone support.',
        component: TimeDocs,
    },
    {
        name: 'TimeAgo',
        path: '/components/timeago',
        description: 'A component that displays elapsed time in human-readable format like "5 minutes ago" or "3 days ago".',
        component: TimeAgoDocs,
    },
    {
        name: 'Typewriter',
        path: '/components/typewriter',
        description: 'A typewriter component that displays text one character at a time with configurable timing.',
        component: TypewriterDocs,
    },
];

export default AVAILABLE_COMPONENTS;
