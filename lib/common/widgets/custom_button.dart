import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback onTab;

  const CustomButton({Key? key, required this.text,required this.onTab}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: onTab,
        child: Text(
          text,
        ),
        style: ElevatedButton.styleFrom(
          minimumSize: const Size(double.infinity,50),
        ),
    );
  }
}
