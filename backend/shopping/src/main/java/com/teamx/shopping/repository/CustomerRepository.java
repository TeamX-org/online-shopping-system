package com.teamx.shopping.repository;

import com.teamx.shopping.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long>{ 
}
