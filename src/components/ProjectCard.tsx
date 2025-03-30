'use client';

import React, { useState } from "react";
import { Card, CardBody, CardFooter, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  languages: string;
  image: string;
  link: string;
  extraInfo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, languages, image, extraInfo}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        onPress={() => setIsOpen(true)}
        className="aspect-square w-full max-w-[350px] hover:scale-[1.02] transition-transform duration-300 rounded-md overflow-hidden shadow-md bg-[--color-bg] dark:bg-[var(--color-sec)]"
        isPressable
      >
        <CardBody className="p-0">
          <Image
            src={image}
            alt={title}
            width={350}
            height={350}
            className="w-full h-full object-cover"
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start p-4 gap-1 min-h-[90px]">
          <h3 className="text-lg font-semibold text-[--color-text]">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{languages}</p>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="lg">
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-auto rounded"
            />
            <p className="mt-4 text-[--color-text]">{languages}</p>
            <p className="text-sm text-gray-500">{extraInfo}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
