"use client";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { api } from "@/trpc/react";
import type { ShoppingItem } from "@prisma/client";
import { useToast } from "./ui/use-toast";

const CreateNewButton = ({
  setTableFields,
}: {
  setTableFields: Dispatch<SetStateAction<ShoppingItem[]>>;
}) => {
  const { toast } = useToast();
  const [popupOpen, setPopupOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  // create api
  const createPost = api.ShoppingItem.createNew.useMutation({
    onSuccess: (itemName) => {
      setTableFields((prev) => [...prev, itemName]);
      setPopupOpen(false);
      toast({
        variant: "success",
        description: `${itemName.name} has been successfully added`,
      });
      setItemName("");
    },

    onError: (error) => {
      console.log("Error while submitting: ", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost.mutate({ newItemName: itemName });
  };

  return (
    <>
      <Button
        onClick={() => {
          setPopupOpen(!popupOpen);
          console.log(popupOpen);
        }}
        size={"sm"}
        className="h-8 bg-blue-700 hover:bg-blue-600"
      >
        Create New
      </Button>

      {popupOpen && (
        <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
          <DialogContent>
            <DialogTitle className="text-red-600">
              Add New Shopping Item
            </DialogTitle>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <Label htmlFor="shopping" className="text-2xl">
                Item Name:
              </Label>
              <Input
                type="text"
                name="shopping"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />

              <Button
                className="mt-5 inline max-w-[150px] self-end"
                type="submit"
              >
                submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default CreateNewButton;
