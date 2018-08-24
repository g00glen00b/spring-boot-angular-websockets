package be.g00glen00b.apps.author;

import lombok.Data;

@Data
public class DetailedAuthorDTO extends AuthorDTO {
    private String bio;

    public DetailedAuthorDTO(Long id, String username, String bio) {
        super(id, username);
        this.bio = bio;
    }

    public DetailedAuthorDTO() {
        this(null, null, null);
    }
}
