class Book {
    constructor (title, authorFirstName, authorLastName, yearPublished) {
        this.title = title;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName; 
        this.published = yearPublished;
    }

    toString() {
        const {authorFirstName: af, authorLastName: al, title, published: 
pub} = this;
        return `${af} ${al}: ${title} (${pub})`;
    }

    static printList (booklist) {
        var listElement = document.getElementById('myList');
        var str = "";
        for (var book of booklist) {
            str += `<li>${book.toString()}</li>`;
        }
        listElement.innerHTML = str;
    }

    static sortByTitle(a, b) {
        var aTitle = a.title.toLowerCase();
        var bTitle = b.title.toLowerCase();
        if (aTitle>bTitle) return 1;
        if (aTitle<bTitle) return -1;
        return 0;
    }
    static sortByAuthor(a, b) {
        var aLastName = a.authorLastName.toLowerCase();
        var bLastName = b.authorLastName.toLowerCase(); 
        if (aLastName>bLastName) return 1;   
        if (aLastName<bLastName) return -1;   

        var aFirstName = a.authorFirstName.toLowerCase();
        var bFirstName = b.authorFirstName.toLowerCase(); 
        if (aFirstName>bFirstName) return 1;   
        if (aFirstName<bFirstName) return -1;                  
/*        
        var aTitle = a.title.toLowerCase();
        var bTitle = b.title.toLowerCase();
        if (aTitle>bTitle) return 1;
        if (aTitle<bTitle) return -1;
*/
        return 0;
    }
    static sortByYear(a, b) {
        return b.published - a.published;
    }

}
var myBooks = [
    new Book ("Hitchhikers Guide to the Galaxy", "Douglas", "Adams", 
1979),
    new Book ("Neuromancer", "William", "Gibson", 1984),
    new Book ("Snow Flower and the Secret Fan", "Lisa", "See", 2005),
    new Book ("1Q84, book 1+2", "Haruki", "Murakami", 2009),
    new Book ("1Q84, book 3", "Haruki", "Murakami", 2010),
    new Book ("Night Train to Rigel", "Thimothy", "Zahn", 2005),
    new Book ("Old Man's War", "John", "Scalzi", 2005),
    new Book ("Agent to the Stars", "John", "Scalzi", 2005),
    new Book ("Douglas Adams's Starship Titanic", "Terry", "Jones", 1997),
    new Book ("Dirk Gently's Holistic Detective Agency", "Douglas", 
"Adams", 1987),  
    new Book ("Pattern Recognition", "William", "Gibson", 2003),
    new Book ("Fingersmith", "Sarah", "Waters", 2002),
    new Book ("BattleAxe/The Wayfarer Redemption", "Sara", "Douglass", 
1995),    
    new Book ("White Cat", "Holly", "Black", 2010),    
    new Book ("Hidden Empire", "Kevin J.", "Anderson", 2002),     
    new Book ("The Windup Girl", "Paolo", "Bacigalupi", 2009),    
    new Book ("The Girl With All the Gifts", "M.R.", "Carey", 2014),
    new Book ("Dissolution", "C.J.", "Sansom", 2004), 
    new Book ("The Name of the Rose", "Umberto", "Eco", 1980), 
    new Book ("Roman Blood", "Steven", "Saylor", 2000),
    new Book ("Felidae", "Akif", "Pirin??ci", 1989)
];

Book.printList(myBooks);

function sortByTitle() {
    myBooks.sort(Book.sortByTitle);
    Book.printList(myBooks);
}

function sortByAuthor() {
    myBooks.sort(Book.sortByAuthor);
    Book.printList(myBooks);
}

function sortByYear() {
    myBooks.sort(Book.sortByYear);
    Book.printList(myBooks);
}

