package com.teamx.shopping.service;

import com.teamx.shopping.dto.CustomerDTO;
import com.teamx.shopping.entity.Customer;
import com.teamx.shopping.repository.CustomerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<CustomerDTO> getAllCustomers() {
        return customerRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public CustomerDTO getCustomer(Long id) {
        return customerRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        Customer customer = convertToEntity(customerDTO);
        return convertToDTO(customerRepository.save(customer));
    }

    public CustomerDTO updateCustomer(Long id, CustomerDTO customerDTO) {
        Customer existingCustomer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        BeanUtils.copyProperties(convertToEntity(customerDTO), existingCustomer, "id");
        return convertToDTO(customerRepository.save(existingCustomer));
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    private CustomerDTO convertToDTO(Customer customer) {
        CustomerDTO customerDTO = new CustomerDTO();
        BeanUtils.copyProperties(customer, customerDTO);
        return customerDTO;
    }

    private Customer convertToEntity(CustomerDTO customerDTO) {
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDTO, customer);
        return customer;
    }
}
