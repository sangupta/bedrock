/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// asset imports
import AssetBrowser from "./components/asset/AssetBrowser";
import AssetIcon from "./components/asset/AssetIcon";
import HexFileViewer from "./components/asset/HexFileViewer";
import LogFileViewer from "./components/asset/LogFileViewer";
import MonacoFileViewer from "./components/asset/MonacoFIleViewer";

// content imports
import ByteSize from "./components/content/ByteSize";
import ColorBox from "./components/content/ColorBox";
import Countdown from "./components/content/Countdown";
import DateTime from "./components/content/DateTime";
import Indicator from "./components/content/Indicator";
import Invisible from "./components/content/Invisible";
import StaticContent from "./components/content/StaticContent";
import TimeAgo from "./components/content/TimeAgo";
import Typewriter from "./components/content/Typewriter";

// data imports
import DataTable from "./components/data/DataTable";

// feedback imports
import Alert from "./components/feedback/Alert";
import LoadingDots from "./components/feedback/LoadingDots";
import Modal from "./components/feedback/Modal";
import Spinner from "./components/feedback/Spinner";

// form imports
import Button from "./components/form/Button";
import ButtonGroup from "./components/form/ButtonGroup";
import Form from "./components/form/Form";
import NumberInput from "./components/form/NumberInput";
import TextInput from "./components/form/TextInput";

// layout imports 
import FlexBox from "./components/layout/FlexBox";
import HBox from "./components/layout/HBox";
import Underlay from "./components/layout/Underlay";
import VBox from "./components/layout/VBox";

// media imports
import Gravatar from "./components/media/Gravatar";
import Image from "./components/media/Image";
import MediaSource from "./components/media/MediaSource";
import Video from "./components/media/Video";

// navigation imports
import Link from "./components/navigation/Link";

// rpc imports
import HttpLoader from "./components/rpc/HttpLoader";

// typography imports
import Code from "./components/typography/Code";
import Heading from "./components/typography/Heading";
import Para from "./components/typography/Para";

// Export all the components from this library
export {
    // asset
    AssetBrowser,
    AssetIcon,
    HexFileViewer,
    LogFileViewer,
    MonacoFileViewer,
    
    // content
    ByteSize,
    ColorBox,
    Countdown,
    DateTime,
    Indicator,
    Invisible,
    StaticContent,
    TimeAgo,
    Typewriter,

    // data
    DataTable,

    // feedback
    Alert,
    LoadingDots,
    Modal,
    Spinner,

    // form
    Button,
    ButtonGroup,
    Form,
    NumberInput,
    TextInput,

    // layout
    FlexBox,
    HBox,
    Underlay,
    VBox,

    // media
    Gravatar,
    Image,
    MediaSource,
    Video,

    // navigation
    Link,

    // rpc
    HttpLoader,

    // typography
    Code,
    Heading,
    Para,
};
