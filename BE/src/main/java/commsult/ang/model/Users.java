package commsult.ang.model;

import java.sql.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "users")
public class Users {
    private @Id @GeneratedValue(strategy = GenerationType.AUTO) Long id;
    private @Column(length = 155) String username;
    private @Column(length = 155) String password;
    private @Column(length = 155) Integer role;
    private Integer partners;
    private Integer company;
    private @DateTimeFormat(pattern = "YYYY-MM-HH HH:mm:ss") Date valid_start;
    private @DateTimeFormat(pattern = "YYYY-MM-HH HH:mm:ss") Date valid_end;
    private Boolean is_active;
    private @DateTimeFormat(pattern = "YYYY-MM-HH HH:mm:ss") Date created_on;
    private @DateTimeFormat(pattern = "YYYY-MM-HH HH:mm:ss") Date edited_on;

    public Users() {

    }

    public Users(String username, String password, Integer role, Integer partners, Integer company, Date valid_start,
            Date valid_end, Boolean is_active, Date created_on, Date edited_on) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.partners = partners;
        this.company = company;
        this.valid_start = valid_start;
        this.valid_end = valid_end;
        this.is_active = is_active;
        this.created_on = created_on;
        this.edited_on = edited_on;
    }

    public Long getID() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public Integer getRole() {
        return this.role;
    }

    public Integer getPartners() {
        return this.partners;
    }

    public Integer getCompany() {
        return this.company;
    }

    public Date getValidStart() {
        return this.valid_start;
    }

    public Date getValidEnd() {
        return this.valid_end;
    }

    public Boolean getIsActive() {
        return this.is_active;
    }

    public Date getCreatedOn() {
        return this.created_on;
    }

    public Date getEditedOn() {
        return this.edited_on;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.password);
    }

    @Override
    public String toString() {
        return "Users{" + "id=" + this.id + ", name='" + this.username + '\'' + ", role='" + this.role + '\'' + '}';
    }
}
