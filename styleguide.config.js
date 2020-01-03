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
            links: [
                { rel: 'stylesheet', href: './assets/css/bootstrap.min.css' },
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
    content: './docs/bedrock.md'
} );

options.sections.push( {
    name: 'Components',
    content: './docs/components.md',
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
    ]
} );

options.sections.push( {
    name: 'Fragments',
    components: getComponents( 'fragments' ),
    sectionDepth: 3,
    content: './docs/fragments.md'
} );

options.sections.push( {
    name: 'Primed',
    components: getComponents( 'primed' ),
    sectionDepth: 3,
    content: './docs/primed.md'
} );

options.sections.push( {
    name: 'Templates',
    components: getComponents( 'templates' ),
    sectionDepth: 3,
    content: './docs/templates.md'
} );

module.exports = options;
