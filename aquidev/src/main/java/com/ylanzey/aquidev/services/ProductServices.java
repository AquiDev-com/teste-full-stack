package com.ylanzey.aquidev.services;

import com.ylanzey.aquidev.domain.entity.Product;
import com.ylanzey.aquidev.dto.ProductDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


public interface ProductServices {

     Product findById(UUID id);

     Page<Product> findAll(Pageable Pageable);

     Product save(Product product);

     Product update(UUID id, ProductDto productDto);

     void delete(UUID id);


}
