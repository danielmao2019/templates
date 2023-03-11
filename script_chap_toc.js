document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2, h3');
    var toc_list = document.createElement('ol');
    for (let i = 0; i < headings.length; i++)
    {
        const heading = headings[i];
        const level = parseInt(heading.tagName.charAt(1));
        var list_item = document.createElement('li');
        const section_anchor = document.createElement('a');
        section_anchor.textContent = heading.textContent;
        section_anchor.href = "#" + heading.id;
        list_item.appendChild(section_anchor);
        if (level === 2)
        {
            toc_list.appendChild(list_item);
        }
        else if (level === 3)
        {
            var parent_list = toc_list.lastChild.querySelector('li > ol')
            if (parent_list === null)
            {
                parent_list = document.createElement('ol');
                toc_list.lastChild.appendChild(parent_list);
            }
            parent_list.appendChild(list_item);
        }
    }
    const container = document.querySelector('.chap-toc');
    container.appendChild(toc_list);
});
