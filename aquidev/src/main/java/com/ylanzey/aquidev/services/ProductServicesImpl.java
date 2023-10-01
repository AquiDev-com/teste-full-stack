package com.ylanzey.aquidev.services;

import com.ylanzey.aquidev.Exception.ProductNotFoundException;
import com.ylanzey.aquidev.domain.entity.Product;
import com.ylanzey.aquidev.dto.ProductDto;
import com.ylanzey.aquidev.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class ProductServicesImpl implements ProductServices {


    private final ProductRepository productRepository;

    @Autowired
    public ProductServicesImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public Optional<Product> findById(UUID id) {

        return productRepository.findById(id);
    }

    @Override
    public Page<Product> findAll(Pageable pageable) {

        return productRepository.findAll(pageable);
    }

    @Override
    public Product save(Product product) {

        return productRepository.save(product);
    }

    @Override
    public Product update(UUID id, ProductDto productDto) {
        var productExisting = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Error in find product"));

        productExisting.setDescription(productDto.getDescription());
        productExisting.setName(productDto.getName());
        productExisting.setPrice(productDto.getPrice());
        productExisting.setStock(productDto.getStock());

       return productRepository.save(productExisting);


    }

    @Override
    public void delete(UUID id){
        productRepository.deleteById(id);
    }
}
