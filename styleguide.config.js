const glob = require( "glob" );
const path = require( "path" );
const fs = require( "fs" );

function getComponents ( folder ) {
    if ( !folder ) {
        return [];
    }

    const files = glob.sync( 'src/' + folder + '/**/*.{ts,tsx}' );

    // sort based on file name and not path
    files.sort( function ( file1, file2 ) {
        const index1 = file1.lastIndexOf( '/' );
        const index2 = file2.lastIndexOf( '/' );

        const name1 = file1.substring( index1 + 1 );
        const name2 = file2.substring( index2 + 1 );

        return name1.localeCompare( name2 );
    } );

    return files;
};

const options = {
    title: 'Bedrock React Components',
    pagePerSection: true,

    propsParser: require( "react-docgen-typescript" ).withDefaultConfig( {
        savePropValueAsString: true,
    } ).parse,
    webpackConfig: Object.assign( {}, require( "./webpack.config" ), {} ),

    styleguideDir: "docs",
    ribbon: {
        url: 'https://github.com/sangupta/bedrock',
        text: 'Fork on Github'
    },

    exampleMode: 'expand',
    usageMode: 'expand',
    tocMode: 'expand',

    previewDelay: 2000, // wait for 2 seconds after code changes in inline editor before refreshing changes

    template: {
        head: {
            meta: [
                { name: 'keywords', content: 'react,component,library,preact' },
                { name: 'description', content: 'Bedrock is a React component library in Typescript' },
                { name: 'robots', content: 'index,follow' },
                { name: 'author', content: 'Sandeep Gupta, sandy.pec@gmail.com' },
                { name: 'url', content: 'https://bedrock.sangupta.com' }
            ],
            links: [
                { rel: 'stylesheet', href: './assets/css/bootstrap-5beta1.min.css' },
                { rel: 'stylesheet', href: './assets/css/fontawesome-all.min.css' },
                { rel: 'stylesheet', href: './assets/css/bedrock.css' },
                { rel: 'stylesheet', href: './assets/css/bedrock-docs.css' }
            ]
        }
    }
};

options.sections = [];

options.sections.push( {
    name: 'Bedrock',
    content: './docpages/bedrock.md'
} );

options.sections.push( {
    name: 'Components',
    content: './docpages/components.md',
    sectionDepth: 3,
    sections: [
        {
            name: 'Buttons',
            components: getComponents( 'components/buttons' ),
        },
        {
            name: 'Cards',
            components: getComponents( 'components/cards' ),
        },
        {
            name: 'Groups',
            components: getComponents( 'components/groups' ),
        },
        {
            name: 'Connectors',
            components: getComponents( 'components/connectors' ),
        },
        {
            name: 'Containers',
            components: getComponents( 'components/containers' ),
        },
        {
            name: 'Content',
            components: getComponents( 'components/content' ),
        },
        {
            name: 'Form',
            components: getComponents( 'components/form' ),
        },
        {
            name: 'Layout',
            components: getComponents( 'components/layout' ),
        },
        {
            name: 'Utilities',
            components: getComponents( 'components/utils' ),
        },
        {
            name: 'Navigation',
            components: getComponents( 'components/nav' ),
        },
        {
            name: 'Notifications',
            components: getComponents( 'components/notify' ),
        },
        {
            name: 'Popovers',
            components: getComponents( 'components/popovers' ),
        },
        {
            name: 'Progress Indicators',
            components: getComponents( 'components/progress' ),
        },
        {
            name: 'Tables',
            components: getComponents( 'components/tables' ),
        },
        {
            name: 'Text',
            components: getComponents( 'components/text' ),
        }
    ]
} );

options.sections.push( {
    name: 'Fragments',
    components: getComponents( 'fragments' ),
    sectionDepth: 3,
    content: './docpages/fragments.md'
} );

options.sections.push( {
    name: 'Primed',
    components: getComponents( 'primed' ),
    sectionDepth: 3,
    content: './docpages/primed.md'
} );

options.sections.push( {
    name: 'Templates',
    components: getComponents( 'templates' ),
    sectionDepth: 3,
    content: './docpages/templates.md'
} );

module.exports = options;
