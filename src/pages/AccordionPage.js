import Accordion from '../components/Accordion';

function AccordionPage() {
    const items  = [
        {   
            key:'asdaa',
            label: 'Heading 1',
            content: 'This is the description part for Heading 1.his is the description part for Heading 1.'
        },
        {
            key:'asdaasgdfdf',
            label: 'Heading 2',
            content: 'This is the description part for Heading 2.his is the description part for Heading 2.'
        },
        {
            key:'asdaa34345',
            label: 'Heading 3',
            content: 'This is the description part for Heading 3.his is the description part for Heading 3.'
        }
    ]

    return <Accordion items={items} />
};

export default AccordionPage;