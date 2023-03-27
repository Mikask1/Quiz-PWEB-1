const NEWS = [
    {
        "title": "New Study Finds That Eating Chocolate Every Day is Good for Your Health",
        "author": "Jane Smith",
        "date": "22-03-2023",
        "description": "A recent study published in the New England Journal of Medicine has found that eating a small amount of chocolate every day can lower your risk of heart disease and stroke."
    },
    {
        "title": "Local Restaurant Goes Viral with Creative Menu Items",
        "author": "John Doe",
        "date": "18-03-2023",
        "description": "A small restaurant in the heart of downtown has captured the attention of foodies everywhere with its unique and inventive menu offerings."
    },
    {
        "title": "Mayor Announces Plans to Build New Park in City Center",
        "author": "Samantha Lee",
        "date": "15-03-2023",
        "description": "The mayor has announced plans to build a new park in the city center, with the goal of providing more green space and recreational opportunities for residents."
    },
    {
        "title": "Local High School Basketball Team Wins State Championship",
        "author": "Tom Johnson",
        "date": "10-03-2023",
        "description": "The local high school basketball team has brought home the state championship trophy, after a hard-fought victory in the finals."
    },
    {
        "title": "New Study Shows Link Between Screen Time and Depression in Teens",
        "author": "Amy Chen",
        "date": "05-03-2023",
        "description": "A new study published in the Journal of Adolescent Health has found a correlation between excessive screen time and symptoms of depression in teenagers."
    },
    {
        "title": "Tech Company Unveils Revolutionary New Smartphone Design",
        "author": "Mark Taylor",
        "date": "01-03-2023",
        "description": "A tech company has announced the release of a new smartphone design that promises to revolutionize the industry with its sleek and innovative features."
    },
    {
        "title": "Celebrity Couple Announces Surprise Engagement",
        "author": "Emily Davis",
        "date": "27-02-2023",
        "description": "In a surprise announcement, a famous celebrity couple has revealed that they are engaged to be married, much to the delight of their fans."
    },
    {
        "title": "New Report Reveals Alarming Levels of Air Pollution in City",
        "author": "David Kim",
        "date": "22-02-2023",
        "description": "A new report has shown that air pollution levels in the city have reached dangerous levels, posing a significant risk to public health."
    },
    {
        "title": "Local Charity Hosts Successful Fundraiser for Homeless Shelter",
        "author": "Sarah Johnson",
        "date": "18-02-2023",
        "description": "A local charity has raised thousands of dollars for a homeless shelter in the community, through a successful fundraising event that drew support from across the city."
    },
    {
        "title": "Scientists Discover New Species of Rare Butterfly",
        "author": "Michael Brown",
        "date": "14-02-2023",
        "description": "A team of scientists has announced the discovery of a new species of rare butterfly, which has never before been seen in the wild."
    }
]

function PostComponent(id, title, author, date, description) {
    return `<div class="justify-between news-post" style="gap:1rem" onclick="location.href='/news/${id}'">
                <img src="https://picsum.photos/200/200?random=${id}" class="rounded post-image">
                <div>
                    <h3 class="blog-post-title">${title}</h3>
                    <p class="blog-post-meta">
                        ${date} by <a href="/author/${author}">${author}</a>
                    </p>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>
            <div class="seperator"></div>`
}

const newsPosts = document.getElementById('news-posts')

NEWS.forEach((value, index) => newsPosts.innerHTML += PostComponent(index, value.title, value.author, value.date, value.description))

function searchNews(e) {
    const searchInput = e.value;

    const filteredNews = NEWS.filter(value => {
        const words = searchInput.split(" ")

        for (const word of words) {
            if (!value.title.toLowerCase().includes(word))
            return false;
        }
        return true;
    })
    newsPosts.innerHTML = ""
    filteredNews.forEach((value, index) => newsPosts.innerHTML += PostComponent(index, value.title, value.author, value.date, value.description))
}

