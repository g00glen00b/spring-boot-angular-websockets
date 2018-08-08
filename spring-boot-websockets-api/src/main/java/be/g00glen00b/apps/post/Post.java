package be.g00glen00b.apps.post;

import be.g00glen00b.apps.author.Author;
import be.g00glen00b.apps.comment.Comment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String content;
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "post")
	private List<Comment> comments;
	@ManyToOne
	private Author author;
	private LocalDate postedAt;
}
