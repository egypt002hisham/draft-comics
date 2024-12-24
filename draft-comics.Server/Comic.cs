namespace draft_comics.Server
{
    // Represents a single comic book entity with various attributes.
    public class Comic
    {
        // A unique identifier for each comic, automatically generated as a Guid.
        public Guid Id { get; set; } = Guid.NewGuid();

        // The name or title of the comic.
        public string Name { get; set; }

        // A brief description of the comic, providing more details about its content.
        public string Description { get; set; }

        // The category of the comic, such as Action, Adventure, or Fantasy.
        public string Category { get; set; }

        // A list of hashtags associated with the comic for categorization or searchability.
        public List<string> Hashtags { get; set; }

        // The file path of the comic file (e.g., CBZ or CBR format).
        public string FilePath { get; set; }

        // The date when the comic was published.
        public DateTime PublishDate { get; set; }
    }

    // Represents a collection of Comic objects.
    public class Comics
    {
        // A list that holds multiple Comic objects.
        public List<Comic> ComicList { get; set; } = new List<Comic>();
    }
}
