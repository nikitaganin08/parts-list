package com.nikitaganin.partslist.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "parts")
public class Part {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "necessity")
    private boolean necessity;

    public Part() {
    }

    public Part(@NotBlank String name, int quantity, boolean necessity) {
        this.name = name;
        this.quantity = quantity;
        this.necessity = necessity;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public boolean isNecessity() {
        return necessity;
    }

    public void setNecessity(boolean necessity) {
        this.necessity = necessity;
    }
}
