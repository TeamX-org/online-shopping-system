package com.teamx.shopping.dto;

import lombok.Data;

@Data
public class CustomerDTO {
    private Long customerId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;
    private String password;
    private String streetNo;
    private String city;
}
